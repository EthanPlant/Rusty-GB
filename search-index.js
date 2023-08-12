var searchIndex = JSON.parse('{\
"rustyboy":{"doc":"","t":"DLLLLLLLLLLLFLLFMLLLLLL","n":["Args","augment_args","augment_args_for_update","borrow","borrow_mut","command","command_for_update","downcast","fmt","from","from_arg_matches","from_arg_matches_mut","generate_pixels","group_id","into","main","rom","try_from","try_into","type_id","upcast","update_from_arg_matches","update_from_arg_matches_mut"],"q":[[0,"rustyboy"]],"d":["","","","","","","","","","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","","","","","","","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2],"f":[0,[1,1],[1,1],[[]],[[]],[[],1],[[],1],[[]],[[2,3],4],[[]],[5,[[7,[2,6]]]],[5,[[7,[2,6]]]],[[[9,[8]]]],[[],[[11,[10]]]],[[]],[[]],0,[[],7],[[],7],[[],12],[[],11],[[2,5],[[7,[6]]]],[[2,5],[[7,[6]]]]],"c":[],"p":[[3,"Command"],[3,"Args"],[3,"Formatter"],[6,"Result"],[3,"ArgMatches"],[6,"Error"],[4,"Result"],[15,"u8"],[15,"slice"],[3,"Id"],[4,"Option"],[3,"TypeId"]]},\
"rustyboy_core":{"doc":"","t":"AAAAAANDENNNNNNNNNNNNNNNNNNNNNNNNNNNLLLLMLLLLLLLLMMLLLLLLLLAADLLLLMLLLMMLLMLLLLLRREDNNNNNLLLLLLLMLLLFLLLLFMLLLLLLLDLLLLLLLLLARRRRDLLMMMLMLMLLLLLDLLLLLMLLLLLLMLLLDLLMLLLMLLLLL","n":["cartridge","cpu","gameboy","io","mmu","sysclock","BandaiTama5","Cartridge","CartridgeType","HuC1RamBattery","HuC3","Mbc1","Mbc1Ram","Mbc1RamBattery","Mbc2","Mbc2Battery","Mbc3","Mbc3Ram","Mbc3RamBattery","Mbc3TimerBattery","Mbc3TimerRamBattery","Mbc5","Mbc5Ram","Mbc5RamBattery","Mbc5Rumble","Mbc5RumbleRam","Mbc5RumbleRamBattery","Mbc6","Mbc7SensorRumbleRamBattery","Mmm01","Mmm01Ram","Mmm01RamBattery","PocketCamera","RomOnly","RomRam","RomRamBattery","borrow","borrow","borrow_mut","borrow_mut","cart_type","eq","fmt","from","from","into","into","new","new_from_rom","ram","rom","to_string","try_from","try_from","try_from","try_into","try_into","type_id","type_id","cpu","interrupts","Cpu","borrow","borrow_mut","clone","clone_into","ei","eq","fmt","from","halted","ime","into","new","reg","step","to_owned","try_from","try_into","type_id","INTERRUPT_ENABLE_ADDR","INTERRUPT_FLAG_ADDR","Interrupt","InterruptState","Joypad","LcdStat","Serial","Timer","VBlank","borrow","borrow","borrow_mut","borrow_mut","clear_interrupt","clone","clone_into","enabled_interrupts","fmt","from","from","handle_interrupts","interrupt_fired","into","into","new","pending_interrupt","requested_interrupts","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","Gameboy","borrow","borrow_mut","from","into","new","step","try_from","try_into","type_id","timer","DIV_ADDR","TAC_ADDR","TIMA_ADDR","TMA_ADDR","Timer","borrow","borrow_mut","control","counter","divider","from","interrupt_fired","into","modulo","new","step","try_from","try_into","type_id","Memory","borrow","borrow_mut","from","get_byte","get_word","interrupts","into","new","new_with_rom","set_byte","set_word","step","timer","try_from","try_into","type_id","Clock","borrow","borrow_mut","clock_cycles_passed","cycle","from","into","machine_cycles_passed","new","reset","try_from","try_into","type_id"],"q":[[0,"rustyboy_core"],[6,"rustyboy_core::cartridge"],[59,"rustyboy_core::cpu"],[61,"rustyboy_core::cpu::cpu"],[80,"rustyboy_core::cpu::interrupts"],[114,"rustyboy_core::gameboy"],[124,"rustyboy_core::io"],[125,"rustyboy_core::io::timer"],[144,"rustyboy_core::mmu"],[161,"rustyboy_core::sysclock"]],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Create a new Cartridge","Create a new Cartridge from a ROM file","","","","","","","","","","","","","Emulation of the Gameboy CPU","","","","","Boolean to track if EI was called to emulate EI delay","","","Returns the argument unchanged.","Boolean to track if the CPU is halted","Interrupt Master Enable","Calls <code>U::from(self)</code>.","Create a new CPU","The CPU registers","Step through the emulator Returns the number of cycles used","","","","","","","The types of interrupts the Gameboy can handle","The state of the interrupt registers at a given time","","","","","","","","","","Clear the flag for a given interrupt","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Handle all interrupts","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Check if there are any pending interrupts","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Create a new Gameboy","Step through the emulation","","","","","","","","","","","","TAC register","TIMA register","DIV register","Returns the argument unchanged.","Has an interrupt been fired","Calls <code>U::from(self)</code>.","TMA register","","","","","","The MMU (Memory Management Unit) is responsible for …","","","Returns the argument unchanged.","Reads a byte from the memory address space","Reads a word from the memory address space","Interrupt registers","Calls <code>U::from(self)</code>.","Create a new empty Memory","Create a new Memory with a ROM file","Writes a byte to the memory address space","Writes a word to the memory address space","Step the IO devices","Timer","","","","The system clock","","","The amount of CPU clock cycles that have passed since the …","Add cycles to the clock","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","The amount of machine cycles that have passed since the …","Create a new clock","Reset the clock","","",""],"i":[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,5,1,5,1,1,5,1,5,1,5,5,5,5,1,5,1,1,5,1,5,1,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,14,14,14,14,14,13,14,13,14,13,14,14,13,14,13,14,0,13,13,14,13,0,13,14,13,14,13,14,13,14,0,16,16,16,16,16,16,16,16,16,0,0,0,0,0,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,21,21,21,21,21,21,21,21,21,21,21,21],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],0,[[1,1],2],[[1,3],4],[[]],[[]],[[]],[[]],[[],5],[6,5],0,0,[[],7],[[],8],[9,[[8,[1]]]],[[],8],[[],8],[[],8],[[],10],[[],10],0,0,0,[[]],[[]],[11,11],[[]],0,[[11,11],2],[[11,3],4],[[]],0,0,[[]],[[],11],0,[[11,12],9],[[]],[[],8],[[],8],[[],10],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[13,14]],[14,14],[[]],0,[[14,3],4],[[]],[[]],[[11,12],[[15,[9]]]],[[13,14],2],[[]],[[]],[[],13],[12,2],0,[[]],[[],8],[[],8],[[],8],[[],8],[[],10],[[],10],0,[[]],[[]],[[]],[[]],[6,16],[16],[[],8],[[],8],[[],10],0,0,0,0,0,0,[[]],[[]],0,0,0,[[]],0,[[]],0,[[],17],[[17,9]],[[],8],[[],8],[[],10],0,[[]],[[]],[[]],[[12,[19,[18]]],9],[[12,[19,[18]]],20],0,[[]],[[],12],[6,12],[[12,[19,[18]],9]],[[12,[19,[18]],20]],[[12,9]],0,[[],8],[[],8],[[],10],0,[[]],[[]],0,[[21,9]],[[]],[[]],0,[[],21],[21],[[],8],[[],8],[[],10]],"c":[],"p":[[4,"CartridgeType"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Cartridge"],[15,"str"],[3,"String"],[4,"Result"],[15,"u8"],[3,"TypeId"],[3,"Cpu"],[3,"Memory"],[3,"InterruptState"],[4,"Interrupt"],[4,"Option"],[3,"Gameboy"],[3,"Timer"],[15,"usize"],[8,"Into"],[15,"u16"],[3,"Clock"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
