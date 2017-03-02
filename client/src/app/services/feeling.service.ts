import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Feeling } from '../../Feeling';

@Injectable()
export class FeelingService{
    constructor(private http:Http){
        console.log('Feeling Service Initialized...');
    }
    
    getFeelings(){
        return this.http.get('/api/feelings')
        .map(res => res.json());
    }
    
    saveFeeling(feeling) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/feeling',JSON.stringify(feeling),{headers:headers})
        .map(res => res.json());
    }
    
    deleteFeeling(id) {
        return this.http.delete('/api/feeling/' + id)
        .map(res => res.json());
    }
    
    updateFeeling(id, feeling) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/feeling/' + id,JSON.stringify(feeling),{headers:headers})
        .map(res => res.json());
    }
}