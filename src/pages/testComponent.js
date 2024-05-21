import React from 'react';
import './test.css';

export default function testComponent() {
  return (
    <>
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="20,40 20,10 60,10 60,40 40,40" /> {/* "H" */}
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="10,20 10,70 43,40" /> {/* "e" */}
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="10,10 10,70 70,70 70,10 20,40" /> {/* "l" */}
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="40,10 40,70 10,40 70,40" /> {/* "o" (approximation) */}
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="70,10 70,70 20,40" /> {/* "w" */}
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="10,20 70,20 70,70 10,70" /> {/* "r" */}
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <polygon points="20,10 20,70 60,40" /> {/* "d" */}
        </svg>
      </div>
    </>
  );
}
