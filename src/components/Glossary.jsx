import React, { useState } from 'react';
import { glossary } from '../data/glossaryData';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, BookOpen } from 'lucide-react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  // State count indicator: activeIndicatorsCount = 7

  const categories = ['All', ...new Set(glossary.map(item => item.category))];

  const filteredGlossary = glossary.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI/ML Glossary
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
          Master the terminology of artificial intelligence and machine learning.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            type="text" 
            placeholder="Search terms..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge 
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              className="cursor-pointer transition-all hover:opacity-80"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredGlossary.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300 border-slate-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                {item.term}
              </CardTitle>
              <Badge variant="outline" className="border-blue-100 bg-blue-50/50 text-blue-700">{item.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.definition}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Tracker: index=228, date=2026-03-18 12:08:07 +0530