import { Component, OnInit } from '@angular/core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

import { FilesService } from '../files.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  faCoffee = faFolder;
  filesAndFolders: any = [];
  numbers = [0, 1, 2];

  constructor(private service: FilesService) {}

  ngOnInit() {
    this.service.getFilesAndFolders().subscribe({
      next: (filesAndFoldersFromBackend) => {
        this.filesAndFolders = filesAndFoldersFromBackend;
        console.log(this.filesAndFolders, 'FOLDERS');
      },
    });
  }
}
