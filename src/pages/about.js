import React from 'react';
import Layout from '@theme/Layout';

export default function AboutMe() {
  return (
    <Layout title="About Me">
      <main style={{
        maxWidth: '700px',
        margin: '2rem auto',
        background: 'var(--ifm-background-color, #e0f2f1)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(60,72,88,0.12)',
        padding: '2rem',
        color: 'var(--ifm-color-text, #222)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}>
        <h1 style={{ color: '#009688', fontSize: '2rem', marginBottom: '1rem' }}>About Me</h1>
        <p>
          I'm a strategic and detail-oriented Senior Technical Writer with ~7 years of experience crafting clear, accurate, and user-focused documentation across a range of industries—including SaaS, applications, defense, manufacturing, and materials. From API documentation and configuration guides to user manuals and knowledge base content, I translate complex technical concepts into accessible resources that empower users and drive business outcomes.
        </p>
        <p>
          My work spans the full documentation lifecycle: planning, writing, editing, and publishing, often in close collaboration with cross-functional teams including Product, Engineering, Customer Success, and Sales. I’m experienced with tools like Postman, Swagger, DevOps, Jira, and CMS platforms, and I bring both a collaborative mindset and a results-driven approach to every project.
        </p>
        <p>
          Outside of work, I’m a passionate meteorology and aviation enthusiast who’s always up for a good hike—or a well-timed storm chase.
        </p>
      </main>
    </Layout>
  );
}
