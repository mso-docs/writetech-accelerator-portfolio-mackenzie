import React from 'react';
import Layout from '@theme/Layout';

export default function Portfolio() {
    return (
        <Layout title="Portfolio">
            <main style={{ minHeight: '80vh', padding: '2rem' }}>
                <section style={{ maxWidth: '700px', margin: '2rem auto', borderRadius: '16px', boxShadow: '0 4px 24px rgba(60,72,88,0.12)', padding: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '1px' }}>🚀 Portfolio</h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                        Welcome to my portfolio! Here you'll find case studies, writing samples, and more about my work as a technical writer.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(67,56,202,0.08)' }}>
                            <h2 style={{ fontSize: '1.1rem' }}>Case Studies</h2>
                            <ul>
                                <li>API Documentation for Fintech Startup</li>
                                <li>Migration Guide for SaaS Platform</li>
                            </ul>
                        </div>
                        <div style={{ borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(67,56,202,0.08)' }}>
                            <h2 style={{ fontSize: '1.1rem' }}>Writing Samples</h2>
                            <ul>
                                <li>Blog: "How to Write Great API Docs"</li>
                                <li>Tutorial: "Getting Started with React"</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
    }
