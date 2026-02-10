import { Scissors, Sprout, TreeDeciduous, Droplets, Fence, Flower } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Mowing & Maintenance',
    description: 'Regular mowing, edging, and trimming to keep your lawn pristine all season long.',
    price: 'From $50/visit',
    image: 'https://images.unsplash.com/photo-1731082686849-d2e0a4d2c70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbW93aW5nJTIwZ3Jhc3N8ZW58MXx8fHwxNzY3NTgwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Sprout,
    title: 'Garden Design & Planting',
    description: 'Custom garden designs with beautiful flower beds, shrubs, and seasonal plantings.',
    price: 'From $500',
    image: 'https://images.unsplash.com/photo-1640374679719-9155e95db92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBsYW5kc2NhcGluZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzY3NTY4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: TreeDeciduous,
    title: 'Tree & Shrub Care',
    description: 'Professional pruning, trimming, and health maintenance for trees and shrubs.',
    price: 'From $150',
    image: 'https://images.unsplash.com/photo-1765064520254-229dbf995bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcHJ1bmluZyUyMGdhcmRlbmluZ3xlbnwxfHx8fDE3Njc2NTUxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Droplets,
    title: 'Irrigation Systems',
    description: 'Installation and maintenance of efficient watering systems to keep your landscape healthy.',
    price: 'From $800',
    image: 'https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbGFuZHNjYXBpbmclMjBnYXJkZW58ZW58MXx8fHwxNzY3NjU1MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Fence,
    title: 'Hardscaping',
    description: 'Patios, walkways, retaining walls, and other stone or concrete installations.',
    price: 'From $2,000',
    image: 'https://images.unsplash.com/photo-1584810986508-ea37b01fe82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwYXRod2F5JTIwZGVzaWdufGVufDF8fHx8MTc2NzY0MzI3M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Flower,
    title: 'Seasonal Cleanup',
    description: 'Spring and fall cleanup services including leaf removal and bed preparation.',
    price: 'From $200',
    image: 'https://images.unsplash.com/photo-1759724142539-66c82d5846e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzY3NTgwNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Services() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to complete landscape transformations, we offer comprehensive services for every outdoor need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">{service.price}</span>
                    <button className="text-green-600 hover:text-green-700 font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
