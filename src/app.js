import React, { useState, useEffect } from 'react';
import { CheckCircle2, Star, Users, TrendingUp, BarChart3, Shield, Clock, Award, Menu, X, Zap, Target, BookOpen, GraduationCap, Building2, Sparkles, ArrowRight, Play, ChevronDown, LineChart } from 'lucide-react';

export default function SchoolsLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="flex justify-center pt-4 px-4">
          <nav 
            className={`flex h-16 w-full max-w-7xl items-center justify-between rounded-full border backdrop-blur-2xl px-6 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 border-white/50 shadow-2xl shadow-indigo-500/10' 
                : 'bg-white/80 border-white/40 shadow-xl'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 blur-md opacity-40 -z-10" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Pathway Builder
                </span>
                <div className="text-xs font-semibold text-gray-600">for Schools</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white/60 transition-all">
                Features
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white/60 transition-all">
                Case Studies
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white/60 transition-all">
                Pricing
              </button>
              <div className="w-px h-6 bg-gray-300 mx-2" />
              <button className="rounded-full px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Request Demo
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/60 transition-all"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 px-4">
            <div className="bg-white/95 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-4 space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-white/60">
                Features
              </button>
              <button className="w-full text-left px-4 py-2 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-white/60">
                Case Studies
              </button>
              <button className="w-full text-left px-4 py-2 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-white/60">
                Pricing
              </button>
              <div className="h-px bg-gray-300 my-2" />
              <button className="w-full px-4 py-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm border border-indigo-200">
                <Building2 className="h-4 w-4" />
                Trusted by 50+ schools nationwide
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                Empower every student's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  college journey
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                A comprehensive platform that helps students discover their passions, build meaningful projects, and craft compelling college applications—all while saving your counselors time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </button>
                <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-lg px-8 py-4 transition-all">
                  Schedule Tour
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">Free for educators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">Setup in 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">FERPA compliant</span>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600" />
                        <div>
                          <div className="font-bold text-gray-900">Teacher Dashboard</div>
                          <div className="text-sm text-gray-500">Real-time insights</div>
                        </div>
                      </div>
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                        <Users className="h-6 w-6 text-green-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">156</div>
                        <div className="text-sm text-gray-600">Active Students</div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                        <BarChart3 className="h-6 w-6 text-indigo-600 mb-2" />
                        <div className="text-2xl font-bold text-gray-900">89%</div>
                        <div className="text-sm text-gray-600">Completion Rate</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Class Progress</span>
                        <span className="text-sm">Week 8 of 12</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                        <div className="bg-white h-full rounded-full" style={{width: '67%'}} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-6 top-8 bg-white rounded-2xl shadow-xl p-4 border-2 border-amber-200 transform rotate-[3deg]">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-amber-500" />
                    <div className="text-sm font-bold text-gray-900">25 projects completed</div>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-8 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-200 transform rotate-[-3deg]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <div className="text-sm font-bold text-gray-900">2hrs saved per student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Partner Schools</div>
            </div>
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-600 font-semibold">Students Empowered</div>
            </div>
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Project Completion</div>
            </div>
            <div>
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">40%</div>
              <div className="text-gray-600 font-semibold">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits for Schools */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <Zap className="h-4 w-4" />
              Built for schools
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Everything your counselors need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete solution that scales with your institution while maintaining the personal touch students need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Scale Without Limits',
                description: 'Support thousands of students with the same personalized attention, regardless of counselor-to-student ratios',
                gradient: 'from-indigo-500 to-purple-600',
                bg: 'from-indigo-50 to-purple-50'
              },
              {
                icon: BarChart3,
                title: 'Data-Driven Insights',
                description: 'Track student progress, engagement, and outcomes with real-time analytics and comprehensive reporting',
                gradient: 'from-blue-500 to-cyan-600',
                bg: 'from-blue-50 to-cyan-50'
              },
              {
                icon: Clock,
                title: 'Save Counselor Time',
                description: 'Automate guidance, track progress, and focus on high-touch interactions where you add the most value',
                gradient: 'from-green-500 to-emerald-600',
                bg: 'from-green-50 to-emerald-50'
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'FERPA-compliant platform with enterprise-grade security, SSO integration, and data privacy controls',
                gradient: 'from-amber-500 to-orange-600',
                bg: 'from-amber-50 to-orange-50'
              },
              {
                icon: GraduationCap,
                title: 'Proven Methodology',
                description: 'Research-backed curriculum developed with educational psychologists and college admissions experts',
                gradient: 'from-purple-500 to-pink-600',
                bg: 'from-purple-50 to-pink-50'
              },
              {
                icon: BookOpen,
                title: 'Easy Integration',
                description: 'Works with your existing LMS and student information systems. Setup in minutes, not months',
                gradient: 'from-rose-500 to-red-600',
                bg: 'from-rose-50 to-red-50'
              }
            ].map((benefit, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${benefit.bg} rounded-3xl p-8 border-2 border-white shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6`}>
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              A complete platform for every stakeholder
            </h2>
            <p className="text-xl text-gray-600">Designed for counselors, teachers, administrators, and students</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['overview', 'counselors', 'administrators', 'students'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-xl">
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Complete Ecosystem</h3>
                    <p className="text-lg text-gray-700">
                      Pathway Builder seamlessly connects all stakeholders in the college readiness journey with tools tailored to each role.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Real-time dashboard for counselors',
                        'School-wide analytics for administrators',
                        'Engaging activities for students',
                        'Parent communication portal',
                        'Integration with existing systems'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200">
                    <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <LineChart className="h-24 w-24 text-indigo-600" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'counselors' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Counselor Dashboard</h3>
                    <p className="text-lg text-gray-700">
                      Monitor student progress, identify students who need support, and intervene at the right time with actionable insights.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Track individual and class progress',
                        'Flag at-risk students automatically',
                        'Review and provide feedback on projects',
                        'Generate reports for meetings',
                        'Assign custom activities and resources'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Target className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900">Student Engagement</span>
                          <span className="text-sm text-green-600 font-bold">↑ 23%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" style={{width: '87%'}} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                          <div className="text-2xl font-bold text-gray-900">142</div>
                          <div className="text-sm text-gray-600">On Track</div>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                          <div className="text-2xl font-bold text-gray-900">14</div>
                          <div className="text-sm text-gray-600">Need Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'administrators' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Administrative Control</h3>
                    <p className="text-lg text-gray-700">
                      School-wide visibility, outcome tracking, and data-driven decision making to demonstrate program impact.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'School-wide analytics and reporting',
                        'ROI metrics and outcome tracking',
                        'User management and permissions',
                        'Custom branding and configuration',
                        'Export data for accreditation'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
                    <div className="space-y-4">
                      <div className="text-center pb-4 border-b">
                        <div className="text-3xl font-black text-gray-900 mb-1">2,847</div>
                        <div className="text-sm text-gray-600">Total Students Enrolled</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-xl font-bold text-green-600">95%</div>
                          <div className="text-xs text-gray-600">Active</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-indigo-600">87%</div>
                          <div className="text-xs text-gray-600">Completion</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-amber-600">4.7★</div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'students' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Student Experience</h3>
                    <p className="text-lg text-gray-700">
                      Engaging, gamified journey that helps students discover their passions and build meaningful projects.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Personalized assessment activities',
                        'Project builder with templates',
                        'Progress tracking and achievements',
                        'Peer collaboration features',
                        'College application resources'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Star className="h-6 w-6 text-amber-500 fill-current flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-amber-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
                        <div>
                          <div className="font-bold text-gray-900">Sarah's Journey</div>
                          <div className="text-sm text-gray-600">Week 8 • 67% complete</div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-amber-600" />
                          <span className="font-semibold text-gray-900">12 day streak!</span>
                        </div>
                        <div className="flex gap-1">
                          {[1,1,1,1,1,1,1,1,1,1,1,1].map((_, i) => (
                            <div key={i} className="h-6 w-6 rounded bg-gradient-to-br from-amber-400 to-orange-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - School Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Loved by schools nationwide
            </h2>
            <p className="text-xl text-indigo-100">See what educators are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote: "Pathway Builder transformed how we support our students. What used to take counselors hours now happens automatically, and students are more engaged than ever.",
                name: "Dr. Jennifer Martinez",
                title: "Director of Counseling",
                school: "Lincoln High School",
                image: "👩‍🏫"
              },
              {
                quote: "The data insights alone justify the investment. We can identify struggling students early and intervene before they fall behind. It's been a game-changer.",
                name: "Michael Chen",
                title: "Principal",
                school: "Riverside Academy",
                image: "👨‍💼"
              },
              {
                quote: "Our counselor-to-student ratio is 1:500. Pathway Builder helps us scale personalized guidance to every single student. Simply incredible.",
                name: "Sarah Thompson",
                title: "College Counselor",
                school: "Washington Prep",
                image: "👩‍🎓"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-indigo-600 font-semibold">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your school's needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                period: "forever",
                description: "Perfect for piloting with a small group",
                features: [
                  "Up to 50 students",
                  "Basic analytics",
                  "Core curriculum",
                  "Email support",
                  "Community access"
                ],
                cta: "Start Free",
                popular: false
              },
              {
                name: "School",
                price: "$2,999",
                period: "per year",
                description: "For schools ready to scale",
                features: [
                  "Up to 500 students",
                  "Advanced analytics",
                  "Full curriculum access",
                  "Priority support",
                  "SSO integration",
                  "Custom branding",
                  "Training & onboarding"
                ],
                cta: "Request Demo",
                popular: true
              },
              {
                name: "District",
                price: "Custom",
                period: "pricing",
                description: "For districts and large schools",
                features: [
                  "Unlimited students",
                  "District-wide analytics",
                  "API access",
                  "Dedicated support",
                  "Custom integrations",
                  "Professional development",
                  "White-label options"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-white' 
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-amber-400 text-gray-900 font-bold text-sm px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {' '}/{plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <button 
                  className={`w-full rounded-xl py-3 font-bold text-sm mb-6 transition-all ${
                    plan.popular
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                  }`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-600'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border-2 border-indigo-200">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Ready to empower your students?
            </h2>
            <p className="text-xl text-gray-700">
              Join 50+ schools using Pathway Builder to transform their college readiness programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="rounded-2xl border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold text-lg px-8 py-4 transition-all">
                Download Overview (PDF)
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Setup in 15 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Pathway Builder</span>
              </div>
              <p className="text-gray-400 text-sm">Empowering students to discover their path to college success.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Schools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Request Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Training</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2025 Pathway Builder. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>FERPA Compliant • SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
