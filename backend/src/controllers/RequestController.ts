import { Request, Response } from 'express';
import { RequestService } from '../services/RequestService';
import { Observable } from 'rxjs';

const requestService = new RequestService();

export class RequestController {
  getRequests(req: Request, res: Response): void {
    requestService.getRequests().subscribe(
      (requests: Request[]) => {
        res.json(requests);
      },
      (error: any) => {
        res.status(500).json({ error: 'Internal server error' });
      }
    );
  }

  createRequest(req: Request, res: Response): void {
    const request: Request = req.body;

    requestService.createRequest(request).subscribe(
      (createdRequest: Request) => {
        res.status(201).json(createdRequest);
      },
      (error: any) => {
        res.status(500).json({ error: 'Internal server error' });
      }
    );
  }

  updateRequest(req: Request, res: Response): void {
    const id: string = req.params.id;
    const request: Request = req.body;

    requestService.updateRequest(id, request).subscribe(
      (updatedRequest: Request) => {
        res.json(updatedRequest);
      },
      (error: any) => {
        res.status(500).json({ error: 'Internal server error' });
      }
    );
  }

  deleteRequest(req: Request, res: Response): void {
    const id: string = req.params.id;

    requestService.deleteRequest(id).subscribe(
      () => {
        res.sendStatus(204);
      },
      (error: any) => {
        res.status(500).json({ error: 'Internal server error' });
      }
    );
  }
}
