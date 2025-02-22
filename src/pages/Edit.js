import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Edit.css';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchPages = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pages`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPages(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };
    fetchPages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleEdit = (page) => {
    setSelectedPage(page);
    setContent(page.content);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/pages/${selectedPage._id}`, 
        { 
          content,
          title: selectedPage.title,
          lastEdited: new Date().toISOString()
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      // Clear all page caches to force refresh
      const cacheKeys = [
        'aboutmeContent',
        'linksContent',
        'readingContent',
        'techStackContent',
        'aboutmeLastFetch',
        'linksLastFetch',
        'readingLastFetch',
        'techStackLastFetch'
      ];
      
      cacheKeys.forEach(key => localStorage.removeItem(key));
      alert('saved successfully!');
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        alert('Failed to save changes');
      }
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-tabs">
        {pages.map(page => (
          <button
            key={page._id}
            className={`editor-tab ${selectedPage?._id === page._id ? 'active' : ''}`}
            onClick={() => handleEdit(page)}
          >
            {page.title}
          </button>
        ))}
      </div>
      
      {selectedPage ? (
        <div className="editor-content">
          <div className="editor-header">
            <span className="file-path">/{selectedPage.title.toLowerCase()}</span>
            <button className="save-button" onClick={handleSave}>
              save changes
            </button>
            <button className="logout-button" onClick={handleLogout}>
              logout
            </button>
          </div>
          <div className="editor-wrapper">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              spellCheck="false"
              className="code-editor"
            />
          </div>
        </div>
      ) : (
        <div className="editor-placeholder">
          <div className="placeholder-content">
            <span className="emoji">📝</span>
            <h2>select a page to edit</h2>
            <p>choose from the tabs above to start editing</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit; 