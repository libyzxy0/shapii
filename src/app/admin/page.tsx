'use client'

import { Navbar } from '@/components/Navbar';
import { useState } from 'react';

export default function Admin() {
  const [sidebar, setSidebar] = useState(false);
  
  return (
    <>
    <Navbar admin onToggle={(v) => setSidebar(v)} />
    <h1>
    Sidebar:{`${sidebar}`} 
    </h1>
    </>
  )
}