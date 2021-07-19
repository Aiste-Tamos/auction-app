import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

import { Auction } from './auction';

@Injectable({ providedIn: 'root'})
export class AuctionService {

    private auctionsUrl = 'api/auctions';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient
    )
    { }

    //GET auctions from the server
    getAuctions(): Observable<Auction[]> {
        return this.http.get<Auction[]>(this.auctionsUrl)
        //   .pipe(
        //       catchError(this.handleError<Auction[]>
        //         ('getAuctions', []))
        //   );
    }

//     //GET auction by id. Return 'undefined' when id is not found
//     getAuction404<Data>(id: number): Observable<Auction> {
//         const url = `${this.auctionsUrl}/?id=${id}`;
//         return this.http.get<Auction[]>(url)
//           .pipe(
//               map(auctions => auctions[0]),
//               tap(a => {
//                   const outcome = a ? 'fetched' : 'did not find';
//                   this.log(`${outcome} auction id=${id}`);
//               }),
//               catchError(this.handleError<Auction>
//                 (`getAuction id=${id}`))
//           );
//     }

//     //GET auction by id. 404 if id not found
    getAuction(id: number): Observable<Auction> {
        const url = `${this.auctionsUrl}/${id}`;
        return this.http.get<Auction>(url);
    }

//     //Save methods

//     //POST: add new auction to the server
    addAuction(auction: Auction): Observable<Auction> {
        return this.http.post<Auction>(this.auctionsUrl, auction, this.httpOptions);
    }

    //DELETE: delete the auction from the server
    deleteAuction(id: number): Observable<Auction> {
    const url = `${this.auctionsUrl}/${id}`;

    return this.http.delete<Auction>(url, this.httpOptions);
  }

//   /// PUT: update the auction on the server
//   updateauction(auction: Auction): Observable<any> {
//     return this.http.put(this.auctionsUrl, auction, this.httpOptions).pipe(
//       tap(_ => this.log(`updated auction id=${auction.id}`)),
//       catchError(this.handleError<any>('updateAuction'))
//     );
//   }

// //   @param operation - name of the operation that failed
// //   @param result - optional value to return as the observable result

//     private handleError<T>(operation = 'operation', result?: T) {
//         return (error: any): Observable<T> => {

//         // TODO: send the error to remote logging infrastructure
//         console.error(error); // log to console instead

//         // TODO: better job of transforming error for user consumption
//         this.log(`${operation} failed: ${error.message}`);

//         // Let the app keep running by returning an empty result.
//         return of(result as T);
//         };
  }