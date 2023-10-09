import React from 'react'; // menghindari error ketika Babel hendak mengubah kode JSX menjadi kode JavaScript
import ContactApp from './components/ContactApp';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);