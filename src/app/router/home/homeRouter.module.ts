import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../components/share.module';
import { HomeService } from '../../core/home.service';
import { PostService } from '../../core/post.serivce'
import { HomeComponent } from './home.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent},
      {path: 'post', component: PostdetailsComponent}
    ])
  ],
  declarations: [HomeComponent, PostdetailsComponent],
  providers: [
    {provide: 'home', useClass: HomeService},
    {provide: 'post', useClass: PostService}
  ],
  exports: [ RouterModule ]
})
export class HomeModule {}
