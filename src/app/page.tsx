import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import LiveMetrics from '@/components/widgets/LiveMetrics';
import AuditTool from '@/components/widgets/AuditTool';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { TechDashboard } from '@/components/ui/TechDashboard';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Globe, 
  Search,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BarChart3,
  Users,
  Award
} from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Make Your Site Faster',
    description: 'We check your site and fix slow loading problems',
    features: ['Fix slow pages', 'Make Google happy', 'Check every week'],
    color: 'from-primary-orange to-gradient-end'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Get Found Locally',
    description: 'Help people in Luxembourg find your business online',
    features: ['Show up on Google Maps', 'Get more local customers', 'Improve your reviews'],
    color: 'from-accent-blue to-blue-400'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Voice Search Ready',
    description: 'When people ask Siri or Google, they find you first',
    features: ['Answer common questions', 'Show up in voice searches', 'Help people find info fast'],
    color: 'from-accent-green to-green-400'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Reach More Countries',
    description: 'Help your site work in French, German, and English',
    features: ['Translate your content', 'Reach more customers', 'Work across borders'],
    color: 'from-purple-500 to-pink-500'
  }
];

const stats = [
  { value: '98%', label: 'Site Speed Score', icon: <Zap className="w-6 h-6" /> },
  { value: '20+', label: 'New Customers Per Month', icon: <Users className="w-6 h-6" /> },
  { value: '#1', label: 'Top Spot on Google', icon: <Award className="w-6 h-6" /> },
  { value: '150%', label: 'More Website Visitors', icon: <TrendingUp className="w-6 h-6" /> }
];

const technologies = [
  'Next.js 15',
  'OpenAI GPT-4',
  'Google Search Console API',
  'Lighthouse CI',
  'Ahrefs API',
  'Schema.org',
  'Core Web Vitals',
  'Hreflang'
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 to-accent-blue/5"></div>
        <div className="container-wide mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary-orange/10 border border-primary-orange/20 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-primary-orange" />
                  <span className="text-sm text-primary-orange font-medium">
                    #1 Website Helper in Luxembourg
                  </span>
                </div>
                
                <h1 className="h1 text-white leading-tight">
                  Your Website Can Get{' '}
                  <span className="text-gradient">
                    More Customers
                  </span>
                </h1>
                
                <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
                  We help businesses in Luxembourg get found on Google. 
                  Your website already exists. Let us make it work better for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Check My Website Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  See What We Did
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-orange/10 rounded-lg mb-2">
                      <div className="text-primary-orange">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-accent-blue/20 rounded-3xl blur-3xl"></div>
              <LiveMetrics />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              How We Can{' '}
              <span className="text-gradient">Help Your Website</span>{' '}
              Get More Business
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Your website might look nice. But can people find it? 
              We make small changes that bring big results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} variant="tech" hover="glow" className="group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-accent-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Learn More About What We Do
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Proof of Concept Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-card-bg/20">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <h2 className="h2 text-white mb-6">
              This Website Is{' '}
              <span className="text-gradient">Our Example</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We built this site to show you what good work looks like. 
              It loads fast, shows up on Google, and brings us customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} variant="default" padding="md" hover="lift">
                    <CardContent>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-primary-orange">
                          {stat.icon}
                        </div>
                        <span className="text-text-secondary text-sm">
                          {stat.label}
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-white font-mono">
                        {stat.value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card variant="gradient" padding="lg">
                <CardContent>
                  <h3 className="h4 text-white mb-4">Tools We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-orange/10 border border-primary-orange/20 rounded-full text-sm text-primary-orange"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Professional Tech Visual */}
              <TechDashboard />
              
              {/* Interactive Audit Tool */}
              <AuditTool />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange/10 via-dark-bg to-accent-blue/10">
        <div className="container-narrow mx-auto text-center">
          <div className="space-y-8">
            <h2 className="h2 text-white">
              Ready to Get More{' '}
              <span className="text-gradient">Customers</span> ?
            </h2>
            
            <p className="text-xl text-text-secondary">
              Many businesses in Luxembourg trust us to help their websites work better. 
              Your turn to see what we can do for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group">
                Start Now
                <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Talk to Us
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-text-secondary">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span>Free check, no strings attached</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-green" />
                <span>See results in 6 months or less</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}