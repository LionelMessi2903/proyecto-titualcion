import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { Role } from '../models/Role';
import { RoleService } from '../services/RoleService';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  getAllRoles(): Observable<Role[]> {
    return this.roleService.getRoles();
  }

  @Get(':id')
  getRoleById(@Param('id') id: number): Observable<Role | undefined> {
    const role$ = this.roleService.getRoleById(id);
    return role$.pipe(
      map(role => {
        if (!role) {
          throw new NotFoundException(`Role with ID ${id} not found`);
        }
        return role;
      })
    );
  }

  @Post()
  createRole(@Body() role: Role): Observable<Role> {
    return this.roleService.createRole(role);
  }

  @Put(':id')
  updateRole(@Param('id') id: number, @Body() role: Role): Observable<Role | undefined> {
    const role$ = this.roleService.updateRole(id, role);
    return role$.pipe(
      map(updatedRole => {
        if (!updatedRole) {
          throw new NotFoundException(`Role with ID ${id} not found`);
        }
        return updatedRole;
      })
    );
  }

  @Delete(':id')
  deleteRole(@Param('id') id: number): Observable<void> {
    this.roleService.deleteRole(id);
    return of(undefined);
  }
}

