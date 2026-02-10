import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

export function PriceCalculator() {
  const [lawnSize, setLawnSize] = useState(1000);
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly'>('biweekly');
  const [services, setServices] = useState({
    mowing: true,
    edging: false,
    trimming: false,
    cleanup: false,
    fertilization: false,
    aeration: false
  });

  const basePrice = {
    weekly: 0.05,
    biweekly: 0.06,
    monthly: 0.08
  };

  const serviceAddons = {
    edging: 15,
    trimming: 20,
    cleanup: 25,
    fertilization: 40,
    aeration: 50
  };

  const calculatePrice = () => {
    let total = lawnSize * basePrice[frequency];
    
    Object.entries(services).forEach(([service, selected]) => {
      if (selected && service !== 'mowing') {
        total += serviceAddons[service as keyof typeof serviceAddons];
      }
    });

    return total;
  };

  const estimatedPrice = calculatePrice();
  const yearlyPrice = estimatedPrice * (frequency === 'weekly' ? 52 : frequency === 'biweekly' ? 26 : 12);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Price Calculator</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your lawn care services based on your specific needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Panel - Inputs */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-6">Configure Your Service</h3>
              
              {/* Lawn Size */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lawn Size (sq ft)
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={lawnSize}
                  onChange={(e) => setLawnSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>500 sq ft</span>
                  <span className="font-semibold text-green-600">{lawnSize.toLocaleString()} sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Service Frequency
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setFrequency('weekly')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                      frequency === 'weekly'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Weekly</div>
                    <div className="text-xs text-gray-500">52x/year</div>
                  </button>
                  <button
                    onClick={() => setFrequency('biweekly')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                      frequency === 'biweekly'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Bi-weekly</div>
                    <div className="text-xs text-gray-500">26x/year</div>
                  </button>
                  <button
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                      frequency === 'monthly'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">Monthly</div>
                    <div className="text-xs text-gray-500">12x/year</div>
                  </button>
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Additional Services
                </label>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-green-50 rounded-lg cursor-not-allowed">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={services.mowing}
                        disabled
                        className="w-5 h-5 text-green-600 rounded"
                      />
                      <span className="font-medium">Lawn Mowing</span>
                    </span>
                    <span className="text-sm text-gray-500">Included</span>
                  </label>

                  {Object.entries(serviceAddons).map(([service, price]) => (
                    <label key={service} className="flex items-center justify-between p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 cursor-pointer">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={services[service as keyof typeof services]}
                          onChange={(e) => setServices({ ...services, [service]: e.target.checked })}
                          className="w-5 h-5 text-green-600 rounded"
                        />
                        <span className="font-medium capitalize">{service}</span>
                      </span>
                      <span className="text-sm text-green-600 font-semibold">+${price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Estimate */}
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
              <h3 className="text-2xl font-semibold mb-6">Your Estimate</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="text-sm opacity-90 mb-2">Per Visit</div>
                <div className="text-5xl font-bold mb-1">
                  ${estimatedPrice.toFixed(2)}
                </div>
                <div className="text-sm opacity-75 capitalize">
                  Billed {frequency}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="text-sm opacity-90 mb-2">Annual Cost</div>
                <div className="text-3xl font-bold">
                  ${yearlyPrice.toFixed(2)}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm opacity-90">
                    This is an estimate based on standard rates. Final pricing may vary based on property conditions and specific requirements.
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-green-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
