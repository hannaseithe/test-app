import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feeling } from '../../../Feeling';
import { feelingStatesModel } from '../../models/FeelingStates.model';

@Component( {
    selector: 'feelings-list',
    templateUrl: './feelingsList.component.html',
    styleUrls: ['./feelingsList.component.css']
})
export class FeelingsListComponent {
    @Input() feelings: Feeling[];
    @Input() editMode: boolean;
    @Output() onStartEditing = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<boolean>();
    editId: string;
    feelingStates: Object;

    constructor() {
        this.feelingStates = feelingStatesModel;
    }

    startEditFeeling( feeling ) {
        this.onStartEditing.emit( {
            name: feeling.name,
            description: feeling.description,
            state: feeling.state,
            _id: feeling._id
        });
        this.editId = feeling._id;
    }

    deleteFeeling( id ) {
        this.onDelete.emit(id);
    }

}