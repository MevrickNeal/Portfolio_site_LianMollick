import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
          <h1 style={{ color: "#d97706", fontSize: "24px" }}>Application Error Captured</h1>
          <p style={{ color: "#666" }}>The application encountered an unexpected runtime error:</p>
          <pre style={{ backgroundColor: "#f3f4f6", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "14px", color: "#dc2626" }}>
            {this.state.error && this.state.error.toString()}
          </pre>
          <details style={{ marginTop: "16px" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Stack Trace Details</summary>
            <pre style={{ backgroundColor: "#f9fafb", padding: "16px", borderRadius: "8px", overflowX: "auto", fontSize: "12px", color: "#4b5563" }}>
              {this.state.errorInfo?.componentStack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#0f172a", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
