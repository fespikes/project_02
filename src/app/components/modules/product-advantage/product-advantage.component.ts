import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'product-advantage',
  templateUrl: './product-advantage.component.html',
  styleUrls: ['./product-advantage.component.sass'],
})
export class ProductAdvantageComponent implements OnInit {
  @Input() moduleType: string;
  @Input() productAdvantage: Object;
  @Input() advantageIncludeImgTable: Object;
  @Input() columns: any[];
  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
    if(this.moduleType === 'slipstream') {
      this.columns = [
        {
          "title": "",
          "width": "30%"
        },
        {
          "title": "MODULES.SLIPSTREAM.TABLE.STORM",
          "width": "20%"
        },
        {
          "title": "MODULES.SLIPSTREAM.TABLE.SPARK_STREAMING",
          "width": "20%"
        },
        {
          "title": "MODULES.SLIPSTREAM.TABLE.APACHE_FLINK",
          "width": "20%"
        },
        {
          "title": "MODULES.SLIPSTREAM.TABLE.SLIPSTREAM",
          "width": "20%"
        }
      ];
      this.rows = [
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.REAL_TIME"
          },
          "storm": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.TEN_MS"
          },
          "spark": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.FIVE_HUNDRED_MS"
          },
          "flink": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.TEN_MS"
          },
          "slipstream": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.SLIPSTREAM"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.USABILITY"
          },
          "storm": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.API_SQL"
          },
          "spark": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.API_SQL"
          },
          "flink": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.API_SQL"
          },
          "slipstream": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.PL_SQL"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.WINDOW_SUPPORT"
          },
          "storm": {
            "svg": true,
            "name": "select"
          },
          "spark": {
            "svg": true,
            "name": "select"
          },
          "flink": {
            "svg": true,
            "name": "select"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.COMPLEX_ANALYSIS"
          },
          "storm": {
            "svg": true,
            "name": "remove"
          },
          "spark": {
            "svg": true,
            "name": "remove"
          },
          "flink": {
            "svg": true,
            "name": "remove"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.HIGH_USABILITY"
          },
          "storm": {
            "svg": true,
            "name": "select"
          },
          "spark": {
            "svg": true,
            "name": "select"
          },
          "flink": {
            "svg": true,
            "name": "select"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.SECURITY"
          },
          "storm": {
            "svg": true,
            "name": "select"
          },
          "spark": {
            "svg": true,
            "name": "select"
          },
          "flink": {
            "svg": true,
            "name": "select"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.RESOURCE_ISOLATION"
          },
          "storm": {
            "svg": true,
            "name": "remove"
          },
          "spark": {
            "svg": true,
            "name": "remove"
          },
          "flink": {
            "svg": true,
            "name": "remove"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.EVENT_PROCESSING"
          },
          "storm": {
            "svg": true,
            "name": "select"
          },
          "spark": {
            "svg": true,
            "name": "select"
          },
          "flink": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.SIMPLE_SUPPORT"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        },
        {
          "category": {
            "svg": false,
            "name": "MODULES.SLIPSTREAM.TABLE.MACHINE_LEARNING"
          },
          "storm": {
            "svg": true,
            "name": "remove"
          },
          "spark": {
            "svg": true,
            "name": "remove"
          },
          "flink": {
            "svg": true,
            "name": "select"
          },
          "slipstream": {
            "svg": true,
            "name": "select"
          }
        }
      ];
    }else if(this.moduleType === 'sophon') {
      this.columns = [
        {
          "title": "MODULES.SOPHON.TABLE.FUNCTION",
          "width": "20%"
        },
        {
          "title": "MODULES.SOPHON.TABLE.TRANSWARP",
          "width": "15%"
        },
        {
          "title": "MODULES.SOPHON.TABLE.ASTER",
          "width": "15%"
        },
        {
          "title": "MODULES.SOPHON.TABLE.SAS",
          "width": "15%"
        },
        {
          "title": "MODULES.SOPHON.TABLE.SPSS",
          "width": "15%"
        },
        {
          "title": "MODULES.SOPHON.TABLE.ANALYSIS",
          "width": "20%"
        }
      ];
      this.rows = [
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.DISTRIBUTED_ENGINE"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SPARK"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.HADOOP"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_DISTRIBUTED_ENGINE"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.LANGUAGE_SUPPORT"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.DEEP_INTEGRATION"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_FINITE"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_LANGUAGE_SUPPORT"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.GRAPHICAL_TOOLS"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_GRAPHICAL_TOOLS"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.DISTRIBUTED_ALGORITHM"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_DISTRIBUTED_ALGORITHM"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.TEXT_MINING"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_TEXT_MINING"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.MACHINE_LEARNING"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_MACHINE_LEARNING"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.DEEP_LEARNING"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_DEEP_LEARNING"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.MODEL_COLLABORATION"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_MODEL_COLLABORATION"
          }
        },
        {
          "function": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.INDUSTRY_TEMPLATES"
          },
          "transwarp": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "aster": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_NOT"
          },
          "sas": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT"
          },
          "spss": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.SUPPORT_PARTIAL"
          },
          "analysis": {
            "svg": false,
            "name": "MODULES.SOPHON.TABLE.ANALYSIS_INDUSTRY_TEMPLATES"
          }
        }
      ];
    }
  }
}
