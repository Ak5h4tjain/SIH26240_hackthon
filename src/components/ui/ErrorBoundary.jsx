import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#050814] text-white p-6 select-none z-50">
          <div className="max-w-md w-full p-6 rounded-3xl border border-red-500/30 bg-slate-950/90 shadow-2xl backdrop-blur-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto border border-red-500/30">
              <AlertTriangle className="w-7 h-7" />
            </div>
            
            <div>
              <h2 className="text-xl font-black tracking-tight text-white">System Component Recovery</h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                An unexpected interface anomaly was caught safely by the hydrogeology dashboard engine.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-left font-mono text-[11px] text-red-300 overflow-x-auto max-h-32 custom-scrollbar">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-white/15 flex items-center gap-2 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-cyan-400" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={this.handleReload}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-xs shadow-neon-cyan flex items-center gap-2 transition cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Reload Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
