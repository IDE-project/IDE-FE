import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  url = environment.url + 'api/v1/projects/1/filesystem/';

  constructor(private http: HttpClient) {}

  getFilesAndFolders() {
    return this.http.get(this.url);
  }
}
