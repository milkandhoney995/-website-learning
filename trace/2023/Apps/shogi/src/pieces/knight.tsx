import {Setting} from '../setting';
import {Piece} from './piece';

export class Knight extends Piece {
  constructor(_turn: boolean, _piece_num: number=4){
    super(Setting.PIECES[_piece_num], _turn, _piece_num);
  }
}