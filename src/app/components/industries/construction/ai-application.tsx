"use client";

export function AIApplications() {
  return (
    <section className="bg-gradient-to-r from-yellow-600 to-gray-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          AI Applications in Construction
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
          Explore how AI is reshaping the construction industry — boosting safety, streamlining operations, and driving innovation on every project.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Smart Project Planning", description: "Use AI to optimize construction timelines, allocate resources, and predict project risks with precision." },
            { title: "Predictive Maintenance", description: "AI-powered sensors detect equipment wear and tear, preventing unexpected breakdowns." },
            { title: "Safety Monitoring", description: "Real-time AI surveillance identifies safety hazards and ensures compliance with regulations." },
            { title: "Cost Estimation", description: "Harness AI to forecast material costs, labor, and project expenses, minimizing budget overruns." },
            { title: "Site Progress Tracking", description: "Drones and AI analyze site photos to monitor progress and detect delays early." },
            { title: "Energy Efficiency", description: "AI analyzes building designs to reduce energy consumption and enhance sustainability." },
          ].map((app, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
              <p className="text-gray-200">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
