import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'datetimepicker', loadChildren: './pages/datetimepicker/datetimepicker.module#DatetimepickerPageModule' },
  { path: 'badge', loadChildren: './pages/badge/badge.module#BadgePageModule' },
  { path: 'actionsheet', loadChildren: './pages/actionsheet/actionsheet.module#ActionsheetPageModule' },
  { path: 'cards', loadChildren: './pages/cards/cards.module#CardsPageModule' },
  { path: 'ionchip', loadChildren: './pages/ionchip/ionchip.module#IonchipPageModule' },
  { path: 'content', loadChildren: './pages/content/content.module#ContentPageModule' },
  { path: 'floatingbutton', loadChildren: './pages/floatingbutton/floatingbutton.module#FloatingbuttonPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'item', loadChildren: './pages/item/item.module#ItemPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'radio', loadChildren: './pages/radio/radio.module#RadioPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'progressbar', loadChildren: './pages/progressbar/progressbar.module#ProgressbarPageModule' },
  { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
  { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'reorder', loadChildren: './pages/reorder/reorder.module#ReorderPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'select', loadChildren: './pages/select/select.module#SelectPageModule' },
  { path: 'toast', loadChildren: './pages/toast/toast.module#ToastPageModule' },
  { path: 'toggle', loadChildren: './pages/toggle/toggle.module#TogglePageModule' },
  { path: 'toolbar', loadChildren: './pages/toolbar/toolbar.module#ToolbarPageModule' },
  { path: 'showmodal', loadChildren: './pages/showmodal/showmodal.module#ShowmodalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
