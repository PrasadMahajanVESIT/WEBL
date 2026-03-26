import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor() { }
// Method to fetch items from the API

  async getItems(): Promise<any[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Unexpected response format');
      }
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
    
  }
}
