import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Role } from '../models/Role';

@Injectable()
export class RoleService {
  private roles: Role[] = [
    { id: 1, name: 'Persona que se titulará', description: 'Descripción del rol' },
    { id: 2, name: 'Asesor', description: 'Descripción del rol' },
    { id: 3, name: 'Universidad', description: 'Descripción del rol' },
  ];

  getRoles(): Observable<Role[]> {
    return of(this.roles);
  }

  getRoleById(id: number): Observable<Role | undefined> {
    const role = this.roles.find((r) => r.id === id);
    return of(role);
  }

  createRole(role: Role): Observable<Role> {
    const newRole: Role = {
      id: Date.now(),
      name: role.name,
      description: role.description,
    };
    this.roles.push(newRole);
    return of(newRole);
  }

  updateRole(id: number, role: Role): Observable<Role | null> {
    const updatedRole = this.roles.find((r) => r.id === id);
    if (updatedRole) {
      updatedRole.name = role.name;
      updatedRole.description = role.description;
      return of(updatedRole);
    }
    return of(null);
  }

  deleteRole(id: number): void {
    const index = this.roles.findIndex((r) => r.id === id);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }
  }
}
