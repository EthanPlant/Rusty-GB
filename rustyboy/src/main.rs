use clap::Parser;

use rustyboy_core::gameboy::Gameboy;

#[derive(Debug, Parser)]
#[command(author, version, about)]
struct Args {
    #[arg(short, long)]
    rom: String,
}

fn main() {
    let args = Args::parse();
    let mut gb = Gameboy::new(&args.rom);
    loop {
        gb.step();
    }
}