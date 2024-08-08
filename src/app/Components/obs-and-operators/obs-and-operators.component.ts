import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, merge, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-obs-and-operators',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operators.component.html',
  styleUrl: './obs-and-operators.component.scss',
})
export class ObsAndOperatorsComponent implements OnInit, OnDestroy {
  // ! => non null assertion operator
  sub!: Subscription;

  // need condition
  // safe navigation operator
  // sub?:Subscription;
  // sub:Subscription|undefined =undefined;
  // sub:Subscription|null=null;
  // next()
  // obs = new Observable((obs) => {
  //   setTimeout(() => {
  //     obs.next('AD1');
  //   }, 2000);

  //   setTimeout(() => {
  //     obs.next('AD2');
  //   }, 3000);

  //   // setTimeout(() => {
  //   //   obs.error('error in observerable');
  //   // }, 4000);
  //   setTimeout(() => {
  //     obs.next('AD3');
  //   }, 4500);
  //   setTimeout(() => {
  //     obs.next('AD4');
  //   }, 5500);
  //   setTimeout(() => {
  //     obs.complete();
  //   }, 6000);
  // });

  ngOnInit(): void {
    // next,error,complete
    //  this.sub= this.obs.subscribe({
    //     next: (data) => {
    //       console.log(data);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete:()=>{
    //       console.log("compleeeteeed");
    //     }
    //   });
    // operators

    // var obs1 = new Observable((obser) => {
    //   console.log('Observable one');
    // });

    // var obs2 = new Observable((observ) => {
    //   console.log('Observable two');
    // });

    // var obs3 = merge(obs1, obs2);

    // console.log(obs3);
    // obs3.subscribe({
    //   next: (data) => {
    //     console.log(data);

    //   }
    //   ,error:(err)=>{
    //     console.log(err);

    //   }
    // })

    // obs3.subscribe((data) => {
    //   console.log(data);
    // });

    // of(2,3,8,9,10).subscribe((data) => {
    //   console.log(data);

    // })


    // from([2,3,8,9,10,[66]]).subscribe((data) => {
    //   console.log(data);

    // })

    // var obs=fromEvent(document,'click');
    // // obs.subscribe((data) => {
    // //   console.log("you clicked document");

    // // })


    // obs.pipe(take(2)).subscribe(() => {
    //   console.log("you clicked document");

    // })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
