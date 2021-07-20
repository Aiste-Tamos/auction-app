import { Component } from "@angular/core";
import { FormBuilder } from '@angular/forms';

import { Auction } from '../auction';
import { AuctionService } from "../auction.service";

@Component({
    selector: 'app-auctions',
    templateUrl: './auctions.component.html',
    styleUrls: ['./auctions.component.scss']
})

export class AuctionsComponent {
    auctions: any[] = [];
    
    createAuctionForm = this.formBuilder.group({
      name: '',
      description: ''
    });

    constructor(private auctionService: AuctionService,
                private formBuilder: FormBuilder
                ) {}

    getAuctions(): void {
        this.auctionService.getAuctions()
        .subscribe(auctions => this.auctions = auctions);
    }

    onSubmit(name: string, description: string): void {
        name = name.trim();
        description = description.trim();
        if (!name || !description) { return; }
        this.auctionService.addAuction({ name, description } as Auction)
        .subscribe(auction => {
        this.auctions.push(auction);
        console.log(auction);
      });
  }

    delete(auction: Auction): void {
        this.auctions = this.auctions.filter(a => a! == a);
        this.auctionService.deleteAuction(auction.id)
        .subscribe();
    }
}