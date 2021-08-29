import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos!';
  image1 = 'https://m.media-amazon.com/images/I/61jaPBOif-L._AC_SY500_.jpg';
  image2 = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=85';
  image3 = 'https://cdn10.phillymag.com/wp-content/uploads/2015/04/MO-running-schuylkill-steve-boyle-940x540.jpg';

  constructor() { }

  ngOnInit() {
  }

}