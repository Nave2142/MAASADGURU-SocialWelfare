import React, { useState, useEffect } from 'react';



const MapComponent = ({ isMobile }) => {
    // These coordinates are based on the Telangana.svg viewBox="0 0 800 533"
    // Hyderabad is roughly at 332, 340 as per the labels in the SVG
    const hqX = 332;
    const hqY = 340;

    return (
        <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '500px',
                margin: '0 auto',
                background: '#fff',
                padding: '10px',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                <img
                    src="/Telangana.svg"
                    alt="Telangana State Map"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
                <svg
                    viewBox="0 0 800 533"
                    style={{
                        position: 'absolute',
                        top: '10px', // matches padding
                        left: '10px', // matches padding
                        width: 'calc(100% - 20px)',
                        height: 'calc(100% - 20px)',
                        pointerEvents: 'none'
                    }}
                >
                    {/* Other district presences */}
                    {[
                        { x: 329, y: 122 }, // Adilabad
                        { x: 469, y: 303 }, // Khammam
                        { x: 264, y: 429 }, // Mahbubnagar
                        { x: 377, y: 277 }, // Warangal
                        { x: 257, y: 215 }, // Nizamabad
                        { x: 359, y: 348 }, // Nalgonda
                    ].map((d, i) => (
                        <circle key={i} cx={d.x} cy={d.y} r="3" fill="#1e3a8a" opacity="0.4" />
                    ))}

                    {/* Glowing highlight for HQ */}
                    <circle cx={hqX} cy={hqY} r="15" fill="#f59e0b" opacity="0.6">
                        <animate attributeName="r" values="10;25;10" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={hqX} cy={hqY} r="5" fill="#1e3a8a" />

                    {/* HQ Label with backdrop for readability */}
                    <rect x={hqX - 50} y={hqY + 15} width="100" height="20" rx="4" fill="rgba(255,255,255,0.8)" />
                    <text
                        x={hqX}
                        y={hqY + 30}
                        fontSize={isMobile ? "11" : "13"}
                        fontWeight="800"
                        fill="#1e3a8a"
                        textAnchor="middle"
                        style={{ letterSpacing: '0.5px' }}
                    >
                        HYDERABAD (HQ)
                    </text>
                </svg>
            </div>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            }}>
                <span style={{
                    width: '10px',
                    height: '10px',
                    background: '#f59e0b',
                    borderRadius: '50%',
                    boxShadow: '0 0 5px #f59e0b'
                }}></span>
                <p style={{ margin: 0, fontSize: '13px', color: '#475569', fontWeight: '500' }}>
                    Active presence across all 33 districts from our Hyderabad Hub
                </p>
            </div>
        </div>
    );
};

export default MapComponent;
