import { Request } from '../models/Request';
import { Observable, of } from 'rxjs';

export class RequestService {
  private requests: Request[];

  constructor() {
    this.requests = [];
  }

  getRequests(): Observable<Request[]> {
    return of(this.requests);
  }

  createRequest(request: Request): Observable<Request> {
    const newRequest: Request = { ...request, id: this.generateRequestId() };
    this.requests.push(newRequest);
    return of(newRequest);
  }

  updateRequest(id: string, updatedRequest: Request): Observable<Request> {
    const index = this.getRequestIndexById(id);
    if (index !== -1) {
      const updated = { ...this.requests[index], ...updatedRequest };
      this.requests[index] = updated;
      return of(updated);
    }
    throw new Error('Request not found');
  }

  deleteRequest(id: string): Observable<void> {
    const index = this.getRequestIndexById(id);
    if (index !== -1) {
      this.requests.splice(index, 1);
      return of();
    }
    throw new Error('Request not found');
  }

  private generateRequestId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private getRequestIndexById(id: string): number {
    return this.requests.findIndex(request => request.id === id);
  }
}
