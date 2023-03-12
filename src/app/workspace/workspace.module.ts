import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { WorkspaceComponent } from './containers';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
    imports: [SharedModule, WorkspaceRoutingModule],
    declarations: [WorkspaceComponent],
})
export class WorkspaceModule {}
