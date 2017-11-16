export class Scenario {

	id: number;
	type: string;
	screenshot: string;	//small image
	short: string;	//short title

	title?: string;
	slogan?: string;
	adv?: string;	//means imagesz
	advBgColor?: string;

	details?: [
		//'business-background':
		{
			title?: string,
			adv?: Object,
			desc?: [
				{
					p?: string,
					h4?: string,
					summary?: string,
					aspects?: string[]
				}
			]
		}
	]
}
