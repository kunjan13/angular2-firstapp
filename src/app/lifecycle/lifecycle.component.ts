import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  private log(hook:string){
    console.log(hook);
  }
  constructor() { }

  ngOnInit() {
  }

}
