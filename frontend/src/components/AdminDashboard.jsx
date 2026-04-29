import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('http://localhost:5000/api/inquiries', {
        headers: {
          'x-admin-username': username,
          'x-admin-password': password
        }
      });
      
      setInquiries(response.data.data);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Incorrect password or server error');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand-100 p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 text-center">Admin Access</h2>
          {error && <p className="text-red-500 mb-4 text-center text-sm font-medium">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input 
                type="text" 
                placeholder="Enter Username" 
                className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Enter Password" 
                className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-sand-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-forest-600 text-white font-bold py-3 rounded-xl hover:bg-forest-700 transition-colors shadow-md"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-forest-900">Inquiries Dashboard</h1>
          <button 
            onClick={() => {
              setIsAuthenticated(false);
              setUsername('');
              setPassword('');
              setInquiries([]);
            }}
            className="text-sm font-semibold bg-white border border-sand-300 text-sand-800 px-4 py-2 rounded-lg hover:bg-sand-100 transition-colors shadow-sm"
          >
            Logout
          </button>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center text-sand-600 font-medium">
            No inquiries received yet.
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-sand-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest-50 text-forest-900 border-b border-forest-100">
                    <th className="p-4 font-semibold whitespace-nowrap text-sm">Date</th>
                    <th className="p-4 font-semibold whitespace-nowrap text-sm">Name</th>
                    <th className="p-4 font-semibold whitespace-nowrap text-sm">Mobile</th>
                    <th className="p-4 font-semibold whitespace-nowrap text-sm">Interest</th>
                    <th className="p-4 font-semibold min-w-[250px] text-sm">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq) => (
                    <tr key={inq._id} className="border-b border-sand-100 hover:bg-sand-50 transition-colors">
                      <td className="p-4 text-sm text-sand-600 whitespace-nowrap">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-medium text-forest-900 whitespace-nowrap">{inq.name}</td>
                      <td className="p-4 text-forest-700 whitespace-nowrap">
                        <a href={`tel:${inq.mobileNumber}`} className="hover:underline">{inq.mobileNumber}</a>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${inq.sessionInterest === 'Private' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                          {inq.sessionInterest}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-sand-800 leading-snug">{inq.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
