function reibekuchen_hash(uint_8_in, hash_length){
			/*
				DIESEN REIBE HASHER REIBEKUCHEN HABE ICH GANZ GANZ GANZ GANZ GANZ AALLEINE ERFUNDEN JA
				OK ALSO
				DER HEISST
				REIBEKUCHEN
				DER HASH ALGO HIER
				HEIST WIE DIE HASH BROWNSSIES UND ODER SO EIN HASH TAG
				ABER NICHT HASHIHSCH DAS MAG ICH ICH NICH
				DER HEISTST
				WIE DER KARTOFFEL HASH BROWNIE
				REIBEKUCHEN

				DIESER HASH ALGO HEISST ALSO REIBEKUCHEN

				DANKE DAS IST MEINE LIZENSSCHRIEBEREI WER WILL KANN AUCH SO TUN ALS HAETTE  ER ES ERFUNDEN
				DANN KOMM ICH ABER UND MECKER
			*/
			let ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
			let hash_arr = new Uint8Array(hash_length);


			//hier wird die kartoffel gerieben oder geschnibbelt wie man so sagt
			let ll = uint_8_in.length;
			let offset = uint_8_in[0]+uint_8_in[Math.floor(ll/2)]+uint_8_in[ll-1];


			let flip = 0;
			for(let i=0;i<uint_8_in.length;i++){
				hash_arr[i%hash_length] += uint_8_in[i];
				if(!flip && hash_arr[i%hash_length] == 0){
					hash_arr[i%hash_length] += uint_8_in[i];
					flip = 1;
				}
				if(flip && hash_arr[i%hash_length] == 0){
					hash_arr[i%hash_length] += (uint_8_in[i]+offset);
				}
			}
			
			
			let hash = "";
			for(let i=0; i<pass_len;i++){
				hash += ascii[hash_arr[i]%ascii.length];
			}

			return hash;
		}
