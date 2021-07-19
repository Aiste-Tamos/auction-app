import { Component, OnInit } from "@angular/core";
import { Auction } from '../auction';
import { AuctionService } from "../auction.service";

@Component({
    selector: 'app-auctions',
    templateUrl: './auctions.component.html',
    styleUrls: ['./auctions.component.scss']
})

export class AuctionsComponent implements OnInit {
    auction: Auction[] = [];
    auctions: Auction[] = [];

    constructor(private auctionService: AuctionService) {}
    
    ngOnInit() {
        this.getAuctions();
    }

    getAuctions(): void {
        this.auctionService.getAuctions()
        .subscribe(auctions => this.auctions = auctions);
    }

    add(name: string, description: string): void {
        name = name.trim();
        description = description.trim();
        if (!name || !description) { return; }
        this.auctionService.addAuction({ name, description } as Auction)
        .subscribe(auction => {
            this.auctions.push(auction);
            console.log(this.auctions);
        });
    }

    delete(auction: Auction): void {
        this.auctions = this.auctions.filter(a => a !== auction);
        this.auctionService.deleteAuction(auction.id)
        .subscribe();
    }
}