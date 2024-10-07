import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { Tenants } from './interfaces/tenants.interface';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class TenancyService implements OnModuleInit {
  private tenants: Tenants;

  // OnModuleInit is a lifecycle hook that is called once the module has been initialized.
  onModuleInit() {
    const tenants: Tenants = JSON.parse(
      readFileSync(join(__dirname, 'tenants.json'), 'utf-8'),
    );

    this.tenants = tenants;
  }

  validateTenantId(tenantId: string): void {
    if (!tenantId || !this.tenants[tenantId]) {
      throw new BadRequestException('Invalid tenant ID');
    }
  }
}
