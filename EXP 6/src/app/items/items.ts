import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.html',
  styleUrls: ['./items.css'],
  imports: [CommonModule]
})

export class ItemsComponent implements OnInit {
  items: any[] = [];
  errorMessage: string | null = null;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    try {
      console.log('Fetching items from API...');
      this.items = await this.apiService.getItems();
      console.log('Items fetched:', this.items);
      this.items = this.items.slice(0, 10);
      console.log('Items after slicing:', this.items);
      this.cdr.detectChanges();
    } catch (error) {
      this.errorMessage = 'Failed to load items. Please try again later.';
      console.error('Error in ngOnInit:', error);
    }
  }
}