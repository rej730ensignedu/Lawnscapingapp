import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Modern Backyard Oasis',
    category: 'Complete Landscape',
    image: 'https://images.unsplash.com/photo-1759724142539-66c82d5846e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzY3NTgwNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A complete transformation featuring native plants, stone pathways, and a custom patio.'
  },
  {
    id: 2,
    title: 'Garden Paradise',
    category: 'Garden Design',
    image: 'https://images.unsplash.com/photo-1640374679719-9155e95db92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBsYW5kc2NhcGluZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzY3NTY4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Colorful perennial gardens with seasonal blooms throughout the year.'
  },
  {
    id: 3,
    title: 'Elegant Pathway',
    category: 'Hardscaping',
    image: 'https://images.unsplash.com/photo-1584810986508-ea37b01fe82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwYXRod2F5JTIwZGVzaWdufGVufDF8fHx8MTc2NzY0MzI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Natural stone pathway with integrated landscape lighting.'
  },
  {
    id: 4,
    title: 'Pristine Lawn Care',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1731082686849-d2e0a4d2c70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbW93aW5nJTIwZ3Jhc3N8ZW58MXx8fHwxNzY3NTgwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Weekly maintenance keeping this lawn in perfect condition.'
  },
  {
    id: 5,
    title: 'Tree Sculpting',
    category: 'Tree Care',
    image: 'https://images.unsplash.com/photo-1765064520254-229dbf995bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcHJ1bmluZyUyMGdhcmRlbmluZ3xlbnwxfHx8fDE3Njc2NTUxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Professional tree pruning and health maintenance services.'
  },
  {
    id: 6,
    title: 'Luxury Landscape',
    category: 'Complete Landscape',
    image: 'https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbGFuZHNjYXBpbmclMjBnYXJkZW58ZW58MXx8fHwxNzY3NjU1MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Full property landscape design with irrigation and outdoor lighting.'
  }
];

const categories = ['All', 'Complete Landscape', 'Garden Design', 'Hardscaping', 'Maintenance', 'Tree Care'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed projects and get inspired for your own landscape transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm text-green-600 font-medium">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 text-lg">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
