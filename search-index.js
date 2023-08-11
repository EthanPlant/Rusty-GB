var searchIndex = JSON.parse('{\
"rustyboy":{"doc":"","t":"DLLLLLLLLLLLLFMLLLLL","n":["Args","augment_args","augment_args_for_update","borrow","borrow_mut","command","command_for_update","fmt","from","from_arg_matches","from_arg_matches_mut","group_id","into","main","rom","try_from","try_into","type_id","update_from_arg_matches","update_from_arg_matches_mut"],"q":[[0,"rustyboy"]],"d":["","","","","","","","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","","","","","","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2],"f":[0,[1,1],[1,1],[[]],[[]],[[],1],[[],1],[[2,3],4],[[]],[5,[[7,[2,6]]]],[5,[[7,[2,6]]]],[[],[[9,[8]]]],[[]],[[]],0,[[],7],[[],7],[[],10],[[2,5],[[7,[6]]]],[[2,5],[[7,[6]]]]],"c":[],"p":[[3,"Command"],[3,"Args"],[3,"Formatter"],[6,"Result"],[3,"ArgMatches"],[6,"Error"],[4,"Result"],[3,"Id"],[4,"Option"],[3,"TypeId"]]},\
"rustyboy_core":{"doc":"","t":"AAAADLLLLLLLLLLLLLAADLLLLMLLLMLLMLLLLLRREDNNNNNLLLLLLLMLLFLLLLMLLLLLLLDLLLLLLLLLDLLLLLMLLLLLLLL","n":["cartridge","cpu","gameboy","mmu","Cartridge","borrow","borrow_mut","from","into","new","new_from_rom","read_byte_from_ram","read_byte_from_rom","try_from","try_into","type_id","write_byte_to_ram","write_byte_to_rom","cpu","interrupts","Cpu","borrow","borrow_mut","clone","clone_into","ei","eq","fmt","from","ime","into","new","reg","step","to_owned","try_from","try_into","type_id","INTERRUPT_ENABLE_ADDR","INTERRUPT_FLAG_ADDR","Interrupt","InterruptState","Joypad","LcdStat","Serial","Timer","VBlank","borrow","borrow","borrow_mut","borrow_mut","clear_interrupt","clone","clone_into","enabled_interrupts","from","from","handle_interrupts","interrupt_fired","into","into","new","requested_interrupts","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","Gameboy","borrow","borrow_mut","from","into","new","step","try_from","try_into","type_id","Memory","borrow","borrow_mut","from","get_byte","get_word","interrupts","into","new","new_with_rom","set_byte","set_word","try_from","try_into","type_id"],"q":[[0,"rustyboy_core"],[4,"rustyboy_core::cartridge"],[18,"rustyboy_core::cpu"],[20,"rustyboy_core::cpu::cpu"],[38,"rustyboy_core::cpu::interrupts"],[70,"rustyboy_core::gameboy"],[80,"rustyboy_core::mmu"]],"d":["","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Create a new Cartridge","Create a new Cartridge from a ROM file","Read a byte from the RAM","Read a byte from the ROM","","","","Write a byte to the RAM","Write a byte to the ROM","","","Emulation of the Gameboy CPU","","","","","Boolean to track if EI was called to emulate EI delay","","","Returns the argument unchanged.","Interrupt Master Enable","Calls <code>U::from(self)</code>.","Create a new CPU","The CPU registers","Step through the emulator","","","","","","","The types of interrupts the Gameboy can handle","The state of the interrupt registers at a given time","","","","","","","","","","Clear the flag for a given interrupt","","","","Returns the argument unchanged.","Returns the argument unchanged.","Handle all interrupts","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Create a new Gameboy","Step through the emulation","","","","The MMU (Memory Management Unit) is responsible for …","","","Returns the argument unchanged.","Reads a byte from the memory address space","Reads a word from the memory address space","Interrupt registers","Calls <code>U::from(self)</code>.","Create a new empty Memory","Create a new Memory with a ROM file","Writes a byte to the memory address space","Writes a word to the memory address space","","",""],"i":[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,13,13,13,13,13,12,13,12,13,12,13,13,12,12,13,0,12,12,13,12,12,13,12,13,12,13,12,13,0,15,15,15,15,15,15,15,15,15,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"f":[0,0,0,0,0,[[]],[[]],[[]],[[]],[[],1],[2,1],[[1,3],4],[[1,3],4],[[],5],[[],5],[[],6],[[1,3,4]],[[1,3,4]],0,0,0,[[]],[[]],[7,7],[[]],0,[[7,7],8],[[7,9],10],[[]],0,[[]],[[],7],0,[[7,11]],[[]],[[],5],[[],5],[[],6],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[12,13]],[13,13],[[]],0,[[]],[[]],[[7,11],[[14,[4]]]],[[12,13],8],[[]],[[]],[[],12],0,[[]],[[],5],[[],5],[[],5],[[],5],[[],6],[[],6],0,[[]],[[]],[[]],[[]],[2,15],[15],[[],5],[[],5],[[],6],0,[[]],[[]],[[]],[[11,[16,[3]]],4],[[11,[16,[3]]],17],0,[[]],[[],11],[2,11],[[11,[16,[3]],4]],[[11,[16,[3]],17]],[[],5],[[],5],[[],6]],"c":[],"p":[[3,"Cartridge"],[15,"str"],[15,"usize"],[15,"u8"],[4,"Result"],[3,"TypeId"],[3,"Cpu"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Memory"],[3,"InterruptState"],[4,"Interrupt"],[4,"Option"],[3,"Gameboy"],[8,"Into"],[15,"u16"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
