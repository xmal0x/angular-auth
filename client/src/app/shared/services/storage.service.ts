import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private window: Window | null
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = document.defaultView
  }

  set(key: string, value: unknown): void {
    try {
      this.window?.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error('Error trying to set item', err)
    }
  }

  get(key: string): unknown {
    try {
      const jsonData = this.window?.localStorage.getItem(key)
      return jsonData ? JSON.parse(jsonData) : null
    } catch (err) {
      console.error('Error trying to get item', err)
      return null
    }
  }

  remove(key: string): void {
    try {
      this.window?.localStorage.removeItem(key)
    } catch (err) {
      console.error('Error trying to remove item', err)
    }
  }

}
