import { Component } from '@angular/core';
import { FeelingService } from '../../services/feeling.service';
import { Feeling } from '../../../Feeling';
import { feelingStatesModel } from '../../models/FeelingStates.model';
import { FeelingsListComponent } from '../feelings-list/feelingsList.component';

@Component( {
    selector: 'feelings',
    templateUrl: './feelings.component.html',
    styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent {
    feelings: Feeling[];
    feelingStates: Object;
    editMode: boolean;
    editId: string;
    name: string;
    description: string;
    state: string;

    constructor( private feelingService: FeelingService ) {
        this.feelingStates = feelingStatesModel;
        this.editMode = false;
        this.feelingService.getFeelings()
            .subscribe( feelings => {
                this.feelings = feelings;
            });
    }

    addFeeling( event ) {
        event.preventDefault();
        var newFeeling = {
            state: this.state,
            name: this.name,
            description: this.description
        };
        this.feelingService.saveFeeling( newFeeling )
            .subscribe( feeling => {
                this.feelings.push( feeling );
            });
    }

    


    updateFeeling( id: string ) {
        var feelings = this.feelings;
        var that = this;
        var updatedFeeling = {
            state: this.state,
            name: this.name,
            description: this.description
        };
        this.feelingService.updateFeeling( id, updatedFeeling )
            .subscribe( feeling => {

                for ( var i = 0; i < feelings.length; i++ ) {
                    if ( feelings[i]._id == id ) {
                        feelings[i] = feeling;
                        that.editMode = false;
                        that.editId = undefined;
                        that.name = "";
                        that.description = "";
                        that.state = "";
                    }

                }
            })
    }
    
    //eventListeners
    
    onStartEditing(editObject) {
        this.editMode = true;
        this.name = editObject.name;
        this.description = editObject.description;
        this.state = editObject.state;
        this.editId = editObject._id;
      }
    
    onDelete( id ) {
        var feelings = this.feelings;
        this.feelingService.deleteFeeling( id )
            .subscribe( data => {
                if ( data.n == 1 ) {
                    for ( var i = 0; i < feelings.length; i++ ) {
                        if ( feelings[i]._id == id ) {
                            feelings.splice( i, 1 )

                        }
                    }
                }
            })
    }
}