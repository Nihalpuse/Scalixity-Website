'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X, ChevronDown, HelpCircle, LayoutGrid, Mail } from 'lucide-react';

// Define types for our data structures
type Industry = {
  id: string;
  name: string;
};

type Service = {
  id: string;
  name: string;
  industryId: string | null;
  url: string;
};

type MessageType = 'text' | 'dropdown' | 'service-info';
type DropdownData = {
  options: Array<{ id: string; name: string }>;
  selected?: string;
  type: 'industry' | 'service';
  items: Array<Industry | Service>;
};

// For service info data
type ServiceInfoData = {
  service: Service;
};

// Then use a union type for data
type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  type: MessageType;
  data?: DropdownData | ServiceInfoData;
};

type ContactInfo = {
  companyName: string;
  email: string;
  message: string;
};

type ServiceContactInfo = {
  companyName: string;
  email: string;
  industryName: string;
  serviceName: string;
};

// Define chat sections
type ChatSection = 'general' | 'services' | 'contact';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Drives the open/close transition (set on the next frame after mount so the
  // panel animates in rather than popping).
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [, setSelectedIndustry] = useState<string | null>(null);
  const [, setContactInfo] = useState<ContactInfo>({ companyName: '', email: '', message: '' });
  const [step, setStep] = useState<'idle' | 'company' | 'email' | 'message' | 'industry' | 'service' | 'complete'>('idle');
  const [services, setServices] = useState<Service[]>([]);
  const [, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<ChatSection>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [serviceContactInfo, setServiceContactInfo] = useState<ServiceContactInfo>({
    companyName: '',
    email: '',
    industryName: '',
    serviceName: ''
  });
  const [isInquirySubmitted, setIsInquirySubmitted] = useState(false);

  // Hardcoded industries
  const hardcodedIndustries: Industry[] = [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Healthcare' },
    { id: '3', name: 'Finance' },
    { id: '4', name: 'Education' },
    { id: '5', name: 'Manufacturing' }
  ];

  // Suggested questions based on section
  const suggestedQuestions = {
    general: [
      "What services does Scalixity offer?",
      "Tell me about your company",
      "What industries do you serve?",
      "How can Scalixity help my business?",
      "What makes Scalixity different?",
      "Do you offer custom solutions?",
    ],
    services: [
      "What services are available in my industry?",
      "Tell me about your pricing",
      "Do you offer consulting services?",
    ],
    contact: [
      "What are your business hours?",
      "How can I schedule a consultation?",
      "Where is your office located?",
    ]
  };

  // Fetch services from API
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const servicesResponse = await fetch('http://kea.mywire.org:5000/api/services');
      const servicesData = await servicesResponse.json();
      setServices(servicesData);

      // Show service selection dropdown
      addBotMessage(
        "Please select a service you're interested in:",
        'dropdown',
        { items: servicesData, type: 'service', options: servicesData }
      );

    } catch (error) {
      console.error('Error fetching services:', error);
      addBotMessage("Sorry, I'm having trouble loading our services right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };


  const addMessage = (content: string, sender: 'user' | 'bot', type: MessageType = 'text', data?: DropdownData | ServiceInfoData) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      type,
      data,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    addMessage(content, 'user');
  };

  const addBotMessage = (content: string, type: MessageType = 'text', data?: DropdownData | ServiceInfoData) => {
    addMessage(content, 'bot', type, data);
  };

  useEffect(() => {
    scrollToBottom();

    if (isOpen && messages.length === 0) {
      // Initial welcome message
      addBotMessage(
        "👋 Hi there! I'm your virtual assistant. How can I help you today?\n\nYou can use the navigation menu below to switch between different sections.",
        'text'
      );
    }
  }, [messages, isOpen]);

  // Animate the panel in on the frame after it mounts.
  useEffect(() => {
    if (!isOpen) {
      setIsPanelVisible(false);
      return;
    }
    const id = requestAnimationFrame(() => setIsPanelVisible(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    // Clear messages when switching sections
    setMessages([]);

    // Set appropriate initial message for each section
    if (activeSection === 'general') {
      addBotMessage("Ask me anything about our company, products, or general inquiries!");
      setStep('idle');
    } else if (activeSection === 'services') {
      addBotMessage("To recommend the best services, please provide your company name:");
      setStep('company');
    } else if (activeSection === 'contact') {
      addBotMessage(
        "Thank you for your interest in contacting us! You can reach us at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 9424710030\n\n" +
        "Or you can visit our contact page for more options."
      );

      // Add contact button message after a short delay
      setTimeout(() => {
        addBotMessage(
          "Click the button below to go to our contact page:",
          'service-info',
          {
            service: {
              id: 'contact-page',
              name: 'Contact Page',
              industryId: null,
              url: 'http://kea.mywire.org:5700/contact'
            }
          }
        );
      }, 500);

      setStep('complete');
    }
  }, [activeSection]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceSelect = async (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      // First update the state with the new service name
      const updatedInfo = {
        ...serviceContactInfo,
        serviceName: service.name
      };

      setServiceContactInfo(updatedInfo);
      addUserMessage(`Selected service: ${service.name}`);

      // Only submit if not already submitted
      if (!isInquirySubmitted) {
        setIsInquirySubmitted(true);
        await submitServiceInquiry(updatedInfo); // Await the submission to ensure it completes
      }

      setStep('complete');

      // Show service info after submission
      addBotMessage(
        `Thank you for your interest in ${service.name}, ${updatedInfo.companyName}! Here's more information about this service:`,
        'service-info',
        { service }
      );
    }
  };

  const submitServiceInquiry = async (updatedInfo: ServiceContactInfo) => {
    try {
      // Ensure all required fields are present before submission
      if (!updatedInfo.companyName ||
          !updatedInfo.email ||
          !updatedInfo.industryName ||
          !updatedInfo.serviceName) {
        console.error('Missing required fields for service inquiry', updatedInfo);
        addBotMessage("Please fill in all the required details to submit the service inquiry.");
        return false;
      }

      const response = await fetch('http://kea.mywire.org:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: updatedInfo.companyName,
          email: updatedInfo.email,
          industry_name: updatedInfo.industryName,
          service_name: updatedInfo.serviceName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Service inquiry submission failed:', errorData);
        throw new Error(errorData.error || 'Failed to save inquiry');
      }

      const responseData = await response.json();
      console.log('Service inquiry submitted successfully:', responseData);
      return true;
    } catch (error) {
      console.error('Error submitting service inquiry:', error);
      addBotMessage("Sorry, there was an issue saving your information. We'll still provide service information.");
      return false;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const userInput = inputValue.trim();
    setInputValue('');

    if (activeSection === 'general') {
      handleGeneralQuery(userInput.toLowerCase());
    } else if (activeSection === 'contact') {
      handleContactFlow();
    } else if (activeSection === 'services') {
      handleServicesFlow(userInput);
    }
  };

  const handleGeneralQuery = async (userInput: string) => {
    setIsLoading(true);

    try {
      // Call the FastAPI endpoint
      const response = await fetch('http://kea.mywire.org:5901/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: userInput,
          user_id: 'web-user', // You can generate or store a unique user ID if needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      const responseData = await response.json();

      setTimeout(() => {
        addBotMessage(responseData.answer);
      }, 500);

    } catch (error) {
      console.error('Error querying chatbot API:', error);
      setTimeout(() => {
        addBotMessage("I'm having trouble connecting to our knowledge base right now. Please try again later or select one of our sections below for more specific help.");
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactFlow = () => {
    // Simply acknowledge any user input in the contact section
    setTimeout(() => {
      addBotMessage(
        "Thank you for your message. For immediate assistance, please contact us directly at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 94247 10030\n\n" +
        "Or use our contact page for more options."
      );
    }, 500);
  };

  const handleServicesFlow = (userInput: string) => {
    if (step === 'company') {
      setServiceContactInfo(prev => ({ ...prev, companyName: userInput }));
      setStep('email');
      setTimeout(() => {
        addBotMessage("Great! Now, please provide your email address:");
      }, 500);
    } else if (step === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInput)) {
        setTimeout(() => {
          addBotMessage("That doesn't look like a valid email address. Please try again:");
        }, 500);
        return;
      }

      setServiceContactInfo(prev => ({ ...prev, email: userInput }));
      setStep('industry');
      setTimeout(() => {
        addBotMessage("Thank you! Now, please select your industry:", 'dropdown',
          { items: hardcodedIndustries, type: 'industry', options: hardcodedIndustries });
      }, 500);
    }
  };

  // Handle industry selection
  const handleIndustrySelect = (industryId: string) => {
    const industry = hardcodedIndustries.find(i => i.id === industryId);

    if (industry) {
      setServiceContactInfo(prev => ({ ...prev, industryName: industry.name }));
      setSelectedIndustry(industryId);
      setStep('service');

      addUserMessage(`Selected industry: ${industry.name}`);
      addBotMessage("Thank you for selecting your industry. Now, let's find a service for you...");
      fetchServices();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setContactInfo({ companyName: '', email: '', message: '' });
    setServiceContactInfo({ companyName: '', email: '', industryName: '', serviceName: '' });
    setSelectedIndustry(null);
    setStep('idle');
    setIsInquirySubmitted(false);

    // Re-initialize based on active section
    if (activeSection === 'general') {
      addBotMessage("Ask me anything about our company, products, or general inquiries!");
    } else if (activeSection === 'services') {
      addBotMessage("To recommend the best services, please provide your company name:");
      setStep('company');
    } else if (activeSection === 'contact') {
      addBotMessage(
        "Thank you for your interest in contacting us! You can reach us at:\n\n" +
        "Email: info@scalixity.com\n" +
        "Phone: +91 9424710030\n\n" +
        "Or you can visit our contact page for more options."
      );

      // Add contact button message after a short delay
      setTimeout(() => {
        addBotMessage(
          "Click the button below to go to our contact page:",
          'service-info',
          {
            service: {
              id: 'contact-page',
              name: 'Contact Page',
              industryId: null,
              url: 'http://kea.mywire.org:5700/contact'
            }
          }
        );
      }, 500);

      setStep('complete');
    }
  };

  const isInputDisabled = () => {
    if (activeSection === 'services') {
      return step === 'industry' || step === 'service' || step === 'complete';
    }
    if (activeSection === 'contact') {
      return false; // Enable input in contact section to allow questions
    }
    return false;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    addUserMessage(question);

    if (activeSection === 'general') {
      handleGeneralQuery(question.toLowerCase());
    } else if (activeSection === 'contact') {
      handleContactFlow();
    } else if (activeSection === 'services') {
      // For services section, treat it like a general query
      handleGeneralQuery(question.toLowerCase());
    }
  };

  const SECTIONS: { key: ChatSection; label: string; Icon: typeof HelpCircle }[] = [
    { key: 'general', label: 'General', Icon: HelpCircle },
    { key: 'services', label: 'Services', Icon: LayoutGrid },
    { key: 'contact', label: 'Contact', Icon: Mail },
  ];

  const placeholder =
    activeSection === 'general' ? 'Ask me anything…' :
    activeSection === 'services' && step === 'company' ? 'Enter your company name…' :
    activeSection === 'services' && step === 'email' ? 'Enter your email address…' :
    activeSection === 'contact' ? 'Ask about contacting us…' :
    'Type your message…';

  return (
    <div className="fixed bottom-5 right-5 z-[60] font-albert">
      {isOpen && (
        <div
          className={`absolute bottom-[4.5rem] right-0 flex w-[calc(100vw-2.5rem)] max-w-[400px] h-[min(620px,calc(100vh-7rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl bg-brand-bone shadow-[0_24px_70px_-20px_rgba(8,13,16,0.45)] ring-1 ring-brand-ink/10 transition-all duration-300 ease-brand-out ${
            isPanelVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'
          }`}
        >
          {/* Header (dark) */}
          <div className="flex items-center justify-between gap-3 bg-brand-ink px-5 py-4 text-brand-bone">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-purple/25 text-lg leading-none text-brand-purple">
                ✻
              </span>
              <div className="flex flex-col">
                <span className="font-bricolage text-sm md:text-base leading-tight">Scalixity assistant</span>
                <span className="text-xs text-brand-bone-muted">Ask anything — we usually reply fast</span>
              </div>
            </div>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-brand-bone-muted transition-colors hover:bg-brand-bone/10 hover:text-brand-bone"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-brand-bone px-4 py-5 [scrollbar-width:thin]" data-lenis-prevent>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm md:text-base leading-relaxed ${
                    message.sender === 'user'
                      ? 'rounded-2xl rounded-tr-md bg-brand-purple text-brand-bone'
                      : 'rounded-2xl rounded-tl-md bg-brand-ink/[0.05] text-brand-ink'
                  }`}
                >
                  {message.type === 'text' && (
                    <p className="whitespace-pre-line">{message.content}</p>
                  )}

                  {message.type === 'dropdown' && message.data && 'items' in message.data && (
                    <div className="space-y-3">
                      <p className="whitespace-pre-line">{message.content}</p>
                      <div className="relative">
                        <select
                          className="w-full appearance-none rounded-xl border border-brand-ink/15 bg-brand-bone px-3 py-2.5 text-sm md:text-base text-brand-ink transition-colors focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                          onChange={(e) =>
                            message.data && 'type' in message.data && message.data.type === 'industry'
                              ? handleIndustrySelect(e.target.value)
                              : handleServiceSelect(e.target.value)
                          }
                          defaultValue=""
                        >
                          <option value="" disabled>Select an option</option>
                          {message.data && 'items' in message.data && message.data.items.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink-soft" />
                      </div>
                    </div>
                  )}

                  {message.type === 'service-info' && message.data && 'service' in message.data && (
                    <div className="space-y-3">
                      <p className="whitespace-pre-line">{message.content}</p>
                      <a
                        href={message.data.service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-brand-btn bg-brand-purple px-4 py-2.5 text-sm md:text-base font-semibold text-brand-bone transition-colors hover:bg-brand-purple-hover"
                      >
                        {message.data.service.id === 'contact-page' ? 'Go to Contact Page' : 'Learn more'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Suggested questions */}
            {messages.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestedQuestions[activeSection].slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="rounded-full border border-brand-ink/15 px-3 py-1.5 text-[10px] md:text-xs text-brand-ink-muted transition-colors hover:border-brand-purple hover:bg-brand-purple hover:text-brand-bone"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer: input + section nav + reset */}
          <div className="border-t border-brand-ink/10 bg-brand-bone p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-brand-ink/15 px-2 py-1 transition-colors focus-within:border-brand-purple focus-within:ring-1 focus-within:ring-brand-purple">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholder}
                disabled={isInputDisabled()}
                className="flex-1 bg-transparent px-2 py-2 text-sm md:text-base text-brand-ink placeholder:text-brand-ink-soft focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isInputDisabled()}
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-purple text-brand-bone transition-colors hover:bg-brand-purple-hover disabled:opacity-40 disabled:hover:bg-brand-purple"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            {/* Section navigation */}
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {SECTIONS.map(({ key, label, Icon }) => {
                const isActive = activeSection === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] md:text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-ink text-brand-bone'
                        : 'text-brand-ink-muted hover:bg-brand-ink/[0.05]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Reset */}
            <div className="mt-2 text-center">
              <button
                onClick={resetChat}
                className="text-xs md:text-sm text-brand-ink-soft transition-colors hover:text-brand-purple"
              >
                Reset conversation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating toggle */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand-purple text-brand-bone shadow-[0_12px_30px_-8px_rgba(89,1,120,0.6)] transition-all duration-300 ease-brand-out hover:bg-brand-purple-hover hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default Chatbot;
