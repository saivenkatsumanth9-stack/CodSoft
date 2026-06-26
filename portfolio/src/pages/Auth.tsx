import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { 
  Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, 
  Shield, Zap, Globe, Users, Star, ChevronRight,
  Rocket, Award, TrendingUp
} from 'lucide-react';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  // Check if user is already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/');
      }
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
        navigate('/');
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { name: formData.name },
          },
        });
        if (error) throw error;
        toast.success('Check your email to confirm your account!');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#contact', label: 'Contact' },
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Build at the speed of thought with our optimized platform' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption keeps your data safe 24/7' },
    { icon: Globe, title: 'Global Scale', desc: 'Deploy worldwide with edge computing technology' },
    { icon: Rocket, title: 'AI-Powered', desc: 'Smart automation tools that learn and adapt' },
  ];

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' },
    { value: '24/7', label: 'Support' },
  ];

  const testimonials = [
    { name: 'Sarah Chen', role: 'CTO, TechFlow', quote: 'Nexus transformed how we build products. Incredible platform.' },
    { name: 'Marcus Johnson', role: 'Founder, StartupX', quote: 'The best investment we made for our development workflow.' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/15 to-highlight/10 blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute inset-0 perspective-grid" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground text-lg group-hover:shadow-glow transition-shadow duration-300">
                N
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Nexus
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {isLogin ? "Don't have an account?" : 'Already a member?'}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLogin(!isLogin)}
                className="border-primary/50 hover:bg-primary/10"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex pt-20">
        {/* Left Side - Info Panel */}
        <div className="hidden lg:flex lg:w-1/2 relative z-10 flex-col p-12 overflow-y-auto">
          <div className="max-w-xl mx-auto space-y-12 py-8">
            {/* Hero Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Sparkles className="w-4 h-4 text-highlight" />
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 10,000+ creators worldwide
                </span>
              </div>
              
              <h1 className="font-display text-5xl font-bold leading-tight">
                {isLogin ? (
                  <>
                    Welcome Back to{' '}
                    <span className="gradient-text-primary">Nexus</span>
                  </>
                ) : (
                  <>
                    Start Building the{' '}
                    <span className="gradient-text-primary">Future</span>
                  </>
                )}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isLogin
                  ? 'Sign in to access your dashboard, manage projects, and continue creating extraordinary digital experiences with our AI-powered tools.'
                  : 'Join thousands of innovators who are transforming their ideas into reality. Get started with our next-generation platform today.'}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 glass-card rounded-xl">
                  <p className="font-display text-2xl font-bold gradient-text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Why Choose Nexus?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="glass-card p-4 rounded-xl transform-3d hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                What Our Users Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="glass-card p-5 rounded-xl">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-highlight text-highlight" />
                      ))}
                    </div>
                    <p className="text-foreground italic mb-3">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-wrap items-center gap-6 justify-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo & Info */}
            <div className="lg:hidden mb-8 text-center animate-fade-in">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground text-xl shadow-glow">
                  N
                </div>
                <span className="font-display font-bold text-2xl text-foreground">
                  Nexus
                </span>
              </a>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                {isLogin ? 'Welcome Back' : 'Join Nexus'}
              </h2>
              <p className="text-muted-foreground text-sm">
                {isLogin
                  ? 'Sign in to continue to your dashboard'
                  : 'Create your account and start building'}
              </p>
            </div>

            {/* Form Card */}
            <div className="auth-card animate-scale-in">
              <div className="relative z-10">
                {/* Toggle Tabs */}
                <div className="flex mb-8 p-1 bg-secondary/50 rounded-xl">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                      isLogin
                        ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                      !isLogin
                        ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                    <Sparkles className="w-4 h-4 text-highlight" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {isLogin ? 'Secure login' : 'Create your account'}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {isLogin ? 'Sign In to Nexus' : 'Get Started Free'}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    {isLogin
                      ? 'Enter your credentials to access your account'
                      : 'No credit card required • Free forever plan'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <div className="space-y-2 animate-fade-in">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name
                      </Label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-12 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="pl-12 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground font-medium">
                      Password
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="pl-12 pr-12 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="text-sm text-primary hover:text-accent transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Please wait...</span>
                      </div>
                    ) : (
                      <>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-4 text-muted-foreground">or continue with</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 rounded-xl border-border/50 hover:bg-secondary/50 hover:border-primary/50 transition-all"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 rounded-xl border-border/50 hover:bg-secondary/50 hover:border-primary/50 transition-all"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Button>
                </div>

                {/* Terms */}
                <p className="text-center text-xs text-muted-foreground mt-6">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>

            {/* Mobile Features */}
            <div className="lg:hidden mt-8 space-y-4 animate-fade-in">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>Fast</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>Global</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>10K+ Users</span>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-6 animate-fade-in">
              <a
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                ← Back to home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Nexus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Auth;
