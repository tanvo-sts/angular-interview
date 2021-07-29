import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettingsService } from '../app.services';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface TableElement {
  id: string;
  type: string;
  links: string;
  content: string;
  thumbnail: string;
  created: string;
  updated: string;
}


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  dataSource: MatTableDataSource<TableElement> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'type', 'content', 'thumbnail', 'created', 'updated'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.appSettingsService.getJSON().subscribe(res => {
      this.dataSource.data = res.data.map((item: any) => {
        return {
          id: item.id,
          type: item.type,
          links: item.links.self,
          content: item.attributes.content,
          thumbnail: item.attributes.display_properties.image,
          created: item.attributes.created_at,
          updated: item.attributes.updated_at
        }
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goTo(row: TableElement) {
    window.open(row.links, '_blank');
  }
}
