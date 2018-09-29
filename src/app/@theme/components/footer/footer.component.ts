import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="http://yoratechnologies.in/" target="_blank">Yora</a>
    </b> 2018</span>
    <div class="socials">
      <a href="https://plus.google.com/u/1/114709165775869185710" target="_blank" class="ion-social-googleplus-outline">
      </a>
      <a href="https://www.facebook.com/groups/1676966979057825/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/YoraTech" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/yora-tech-274913160/" target="_blank" class="ion ion-social-linkedin"></a>
      <a href="https://in.pinterest.com/techyora/" target="_blank" class="ion-social-pinterest"></a>
    </div>
  `,
})
export class FooterComponent {
}
