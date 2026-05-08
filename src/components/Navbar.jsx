import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '30px', 
            backgroundColor: 'white', 
            borderBottom: '4px solid #2563eb',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            {/* The Logo - Centered and Colored */}
            <h1 style={{ 
                fontSize: '42px', 
                fontWeight: '900', 
                color: '#2563eb', 
                margin: '0 0 15px 0',
                letterSpacing: '-1px'
            }}>
                Community<span style={{ color: '#1e293b' }}>Hub</span>
            </h1>
            
            {/* The Links - Forced Spacing */}
            <div style={{ display: 'flex', gap: '30px' }}>
                <Link to="/" style={{ 
                    textDecoration: 'none', 
                    color: '#475569', 
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginRight: '20px' // Manual backup spacing
                }}>
                    Home
                </Link>
                <Link to="/posts" style={{ 
                    textDecoration: 'none', 
                    color: '#475569', 
                    fontWeight: 'bold',
                    fontSize: '18px'
                }}>
                    Posts
                </Link>
            </div>
        </nav>
    );
}