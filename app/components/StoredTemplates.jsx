import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useEditor } from "@craftjs/core";

const StoredTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { actions } = useEditor();

  useEffect(() => {
    const fetchTemplates = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('templates')
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setTemplates(data);
      }

      setLoading(false);
    };

    fetchTemplates();
  }, []);

  const loadTemplate = (template) => {
    try {
      const jsonData = JSON.parse(template.sections);
      actions.deserialize(jsonData);
    } catch (e) {
      console.error('Invalid JSON data', e);
    }
  };

  return (
    <div className='text-gray-950 w-full'>
      <h2>Stored Templates</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {templates.map(template => (
          <li key={template.id} className="p-2 border border-gray-300 rounded mb-2 cursor-pointer" onClick={() => loadTemplate(template)}>
            <h3 className="font-bold">{template.name}</h3>
            <p>{template.sections}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoredTemplates;