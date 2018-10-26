import { Injectable } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  toolTipPositionOptions: TooltipPosition[] =  ['after', 'before', 'above', 'below', 'left', 'right'];

  constructor(private toolTipPosition: TooltipPosition ) { }
}
